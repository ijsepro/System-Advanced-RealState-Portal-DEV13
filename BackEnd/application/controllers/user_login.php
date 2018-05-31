<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class user_login extends CI_Controller {

	public function __construct()
	{
		parent::__construct();
		$this->load->model('user_model');
	}

	public function index()
	{
		$email = $this->input->post('email');
		$password = $this->input->post('password');

		$result = $this->user_model->checkUser($email, hash('sha256', $password . Edifices));

		if ($result == TRUE) {

			echo '{
				"success": true,
				"message": "Correct"
				}';

		} else {

			echo '{
				"success": false,
				"message": "Incorrect"
				}';

		}

	}

}
