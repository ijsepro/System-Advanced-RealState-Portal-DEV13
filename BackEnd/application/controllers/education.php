<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/15/2018
 * Time: 3:50 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Education extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('education_model');
	}

	public function getConstructorEducation($conid = '')
	{
		$works = $this->education_model->getConstructorEducation($conid);
		echo $works;
	}
}
