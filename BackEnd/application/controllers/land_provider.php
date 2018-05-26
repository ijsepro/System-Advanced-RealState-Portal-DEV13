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

class Land_Provider extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('land_provider_model');
	}

	public function landProviders()
	{
		$landProviders = $this->land_provider_model->getAll();
		echo $landProviders;
	}

	public function getLandProvider($lName='')
	{
		$landProviders = $this->land_provider_model->getLandProvider($lName);
		echo $landProviders;
	}

}
