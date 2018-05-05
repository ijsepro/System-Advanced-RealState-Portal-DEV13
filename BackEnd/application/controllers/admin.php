<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Admin extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('admin_model');

	}

	function sendPasswordResetMail($email = '')
	{
		$userID = null;
		$token = null;
		$status = null;

		if ($this->admin_model->checkUser($email) == "true") {
			$userID = $this->admin_model->userID($email);
			$token = $this->admin_model->generateRandomString();

			$data = array(
				'userID' => $userID,
				'token' => $token
			);
			$query = $this->db->insert('recovery_keys', $data);

			if ($query) {
				$send_mail = $this->admin_model->sendPasswordResetMail($email, $token);


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
		$userID = $this->admin_model->getUserID($securityCode);
		$rid = $this->admin_model->getRID($securityCode);

		$status = null;

		if ($userID != null) {
			$result = $this->admin_model->updatePassword($userID, [
				'adminPassword' => $newPassword
			]);
			if ($result == 1) {
				$setTokenUsed = $this->admin_model->setTokenUsed($rid, [
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

	public function insert()
	{
		$target_dir = "C:\wamp64\www\IntellijIDEA\BackEnd\BackEnd\Uploads";
		$target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
		$uploadOK = 1;
		if (file_exists($target_file)) {
			echo "Sorry,File already exits";
			$uploadOK = 0;
		}
		if ($uploadOK == 0) {
			echo "Sorry";
		} else {
			$password = $_POST['adminPassword'];
			if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
				$result = $this->admin_model->insert([
					'adminUsername' => $_POST['adminName'],
					'adminemail' => $_POST['adminEmail'],
					'adminpassword' => hash('sha256', $password . Edifices),
					'adminprofilepicture' => $target_file,
				]);
				echo $result;
			} else {
				echo "Sorry,Try Again";
			}
		}
	}

	public function sendEmail()
	{
		$userName = $_POST["userName"];
		$userEmail = $_POST["userEmail"];
		$adminUserName = $_POST["adminUserName"];
		$adminID = $this->admin_model->findAdmin($adminUserName);
		if ($adminID != null) {
			$result = $this->admin_model->newAdmin([
				'newAdminUserName' => $userName,
				'newAdminEmail' => $userEmail,
				'adminID' => $adminID,

			]);
			if ($result == 1) {
				$resultMail = $this->admin_model->sendMail($userEmail, $userName);
				echo $resultMail;
			} else {
				echo "Please Try Again";
			}
		} else {
			echo "You are not and admin to authorise a new one ";
		}

	}
}
