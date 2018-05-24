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
}
