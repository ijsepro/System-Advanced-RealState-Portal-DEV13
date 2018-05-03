<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/29/2018
 * Time: 11:26 AM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Architecture extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('architecture_model');
	}

	public function architectures()
	{
		$architectures = $this->architecture_model->getAll();
		echo $architectures;
	}

	public function getArchitecture($aName = '')
	{
		$architectureName = $this->architecture_model->getArchitecture($aName);
		echo $architectureName;
	}
}
