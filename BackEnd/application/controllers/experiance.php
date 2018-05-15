<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/15/2018
 * Time: 3:55PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Experiance extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('experiance_model');
	}

	public function getConstructorExperiance($conid = '')
	{
		$works = $this->experiance_model->getConstructorExperiance($conid);
		echo $works;
	}
}
