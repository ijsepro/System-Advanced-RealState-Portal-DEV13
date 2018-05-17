<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/17/2018
 * Time: 11:46 AM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Constructor_clients extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('constructor_clients_model');
	}

	public function getConstructorClients($clientid = '')
	{
		$clients = $this->constructor_clients_model->getConstructorClients($clientid);
		echo $clients;
	}
}
