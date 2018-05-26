<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/26/2018
 * Time: 7:19 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Banker extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('banker_model');
	}

	public function bankers()
	{
		$bankerss = $this->banker_model->getAll();
		echo $bankerss;
	}

	public function getBanker($bName='')
	{
		$bankerName = $this->banker_model->getBanker($bName);
		echo $bankerName;
	}

}
