<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/1/2018
 * Time: 7:19 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Constructor extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('constructor_model');
	}

	public function constructors()
	{
		$constructors = $this->constructor_model->getAll();
		echo $constructors;
	}

	public function getConstructor($cName='')
	{
		$constructorName = $this->constructor_model->getConstructor($cName);
		echo $constructorName;
	}

}
