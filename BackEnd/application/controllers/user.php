<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 4/7/2018
 * Time: 1:20 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class User extends CI_Controller
{

	public function __construct()
	{
		parent:: __construct();
		$this->load->model('user_model');
	}

	function sendMail($email = '')
	{
		$userID = null;
		$token = null;
		$status = null;

		if ($this->user_model->checkUser($email) == "true") {
			$userID = $this->user_model->userID($email);
			$token = $this->user_model->generateRandomString();

			$data = array(
				'userID' => $userID,
				'token' => $token
			);
			$query = $this->db->insert('recovery_keys', $data);

			if ($query) {
				$send_mail = $this->user_model->sendMail($email, $token);


				if ($send_mail === 'success') {
					$status = 'A mail with recovery instruction has sent to your email.';
				} else {
					$status = 'There is something wrong.';
				}


			} else {
				$status = 'There is something wrong.';
			}

		} else {
			$status = "This email doesn't exist in our database.";
		}

		$json = json_encode($status);
		echo $json;

	}

	public function updatePassword()
	{
		$securityCode = $_POST["securityCodee"];
		$newPassword = $_POST["newPasswordd"];
		$rePassword = $_POST["rePasswordd"];
		$userID = $this->user_model->getUserID($securityCode);
		$rid = $this->user_model->getRID($securityCode);

		$status = null;

		if ($userID != null) {
			$result = $this->user_model->updatePassword($userID, [
				'password' => $newPassword
			]);
			if ($result == 1) {
				$setTokenUsed = $this->user_model->setTokenUsed($rid, [
					'valid' => "0"
				]);
				if ($setTokenUsed == 1) {
					$status = "Password updated sucessfully";
				} else {
					$status = "Please Try Again";
				}

			} else {
				$status = "Please Try Again";
			}
		} else {
			$status = "You have enterd an invalid security code.";
		}

		$json = json_encode($status);
		echo $json;
	}
}
