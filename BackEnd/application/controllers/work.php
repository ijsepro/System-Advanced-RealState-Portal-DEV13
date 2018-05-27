<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/3/2018
 * Time: 11:46 AM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Work extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('work_model');
	}

	public function getConstructorWorks($conid = '')
	{
		$works = $this->work_model->getConstructorWorks($conid);
		echo $works;
	}

	public function getArchitectureWorks($arcid = '')
	{
		$works = $this->work_model->getArchitectureWorks($arcid);
		echo $works;
	}

	public function postProject()
	{
		$path = $_FILES['work-file']['name'];
		$ext = pathinfo($path, PATHINFO_EXTENSION);
		if ($ext == "pdf") {
			echo 1;
		} else {
			echo 0;
		}
	}

	public function temparyPost()
	{
		$path = $_FILES['work-file']['name'];
		$ext = pathinfo($path, PATHINFO_EXTENSION);
		if ($ext == "pdf") {
			$res = $this->work_model->temparyPost([
				'url' => '../../assets/img/pdf.jpg',
				'description' => $_POST['description']
			]);
			echo 1;
		} else {
			$target_dir = "D:\STUDYING\GIT\Clone\System-Advanced-RealState-Portal-DEV13\FrontEnd\Client\src\assets\img/";
			$target_file = $target_dir . basename($_FILES["work-file"]["name"]);
			$uploadOK = 1;

			if (file_exists($target_file)) {
				echo 0;
				$uploadOK = 0;
			} else {
				if ($uploadOK == 1) {
					move_uploaded_file($_FILES['work-file']["tmp_name"], $target_file);
					$res = $this->work_model->temparyPost([
						'url' => $_POST['imgname'],
						'description' => $_POST['description']
					]);
					echo 1;
				} else {
					echo 0;
				}
			}
		}

	}

	public function loadPost()
	{
		$architectures = $this->work_model->getPosts();
		echo $architectures;
	}

	public function postAProject()
	{
		$res = $this->work_model->postProject([
			'url' => $_POST['imgname'],
			'description' => $_POST['description']
		]);
	}
}
