<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 5/13/2018
 * Time: 8:44 PM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class User extends CI_Controller
{
	/**
	 * User constructor.
	 */
	public function __construct()
	{
		parent::__construct();
		$this->load->model('user_model');

	}

	public function registerNewUser()
	{
		$target_dir = "D:\GDSE 42\Group Project\Edifices-Uploading-Folder/";
		$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
		$ext = pathinfo($target_file, PATHINFO_EXTENSION);
		echo $ext;
//		$uploadOK = 1;
//		if (file_exists($target_file)) {
//			echo "Sorry,File already exits";
//			$uploadOK = 0;
//		}
//		if ($uploadOK == 0) {
//			echo "Sorry";
//		} else {
//			$password = $_POST['userPassword'];
//			if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
//				$result = $this->user_model->newUser([
//					'newUserName' => $_POST['userName'],
//					'newUserEmail' => $_POST['userEmail'],
//					'newUserPassword' => hash('sha256', $password . Edifices),
//					'newUserContactNumber' => $_POST['contactNumber'],
//					'newUserStatus' => $_POST['status'],
//					'newUserAbout' => $_POST['aboutYou'],
//					'newUserOfficialNum' => $_POST['officialNumber'],
//					'newUserPC' => $target_file,
//				]);
//				echo $result;
//			} else {
//				echo "Sorry,Try Again";
//			}
//		}
	}
}
