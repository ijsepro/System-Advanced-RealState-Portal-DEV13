<?php
/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/23/2018
 * Time: 9:55 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Admin extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('admin_model');

	}

	public function insert()
	{
		$target_dir = "C:\wamp64\www\BackEnd\AREP\Uploads/";
		$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
		$uploadOK = 1;
		if (file_exists($target_file)) {
			echo "Sorry,File already exits";
			$uploadOK = 0;
		}
		if ($uploadOK == 0) {
			echo "Sorry";
		} else {
			if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
				$result = $this->admin_model->insert([
					'adminUsername' => $_POST['adminName'],
					'adminemail' => $_POST['adminEmail'],
					'adminpassword' => $_POST['adminPassword'],
					'adminprofilepicture' => $target_file,
				]);
				echo $result;
			} else {
				echo "Sorry,Try Again";
			}
		}
	}
}
