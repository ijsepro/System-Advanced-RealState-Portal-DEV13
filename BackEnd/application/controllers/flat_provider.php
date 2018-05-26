<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/26/2018
 * Time: 5:19 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Flat_Provider extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('flat_provider_model');
	}

	public function flatProviders()
	{
		$flatProviders = $this->flat_provider_model->getAll();
		echo $flatProviders;
	}

	public function getLandProvider($fName='')
	{
		$flatProviders = $this->flat_provider_model->getFlatProvider($fName);
		echo $flatProviders;
	}

}
