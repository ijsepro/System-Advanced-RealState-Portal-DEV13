<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/23/2018
 * Time: 9:53 PM
 */
class Admin_model extends CI_Model
{

	function checkUser($email)
	{
		$this->db->select('adminID');
		$query = $this->db->get_where('admin', ['adminEmail' => $email]);

		if ($query->result_array() != null) {
			return 'true';
		} else {
			return 'false';
		}
	}

	function userID($email)
	{
		$this->db->select('adminID');
		$query = $this->db->get_where('admin', ['adminEmail' => $email]);

		$uid = null;

		foreach ($query->result() as $row) {
			$uid = $row->adminID;
		}

		return $uid;
	}

	function generateRandomString($length = 20)
	{
		$characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		$charactersLength = strlen($characters);
		$randomString = '';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLength - 1)];
		}
		return md5($randomString);
	}

	function sendPasswordResetMail($to, $token)
	{

		$link = 'http://localhost:4200/reset-password';

		$body = "				Hello, 
				 You have requested for your password recovery. " . $link . "
				 Click here to reset your password. If you are unable to click the link then copy the below 
				 link and paste in your browser to reset your password. " . $link . "
				 Place use this security code to reset ur password 
				 			" . $token . "";

		mail($to, "Edifices Homes: Password Recovery Instruction", $body);

		return 'success';

	}

	function verifytoken($userID, $token)
	{
		$this->db->select('valid');
		$query = $this->db->get_where('recovery_keys', ['userID' => $userID] && ['token' => $token]);

		$row = mysqli_fetch_assoc($query);

		if (mysqli_num_rows($query) > 0) {
			if ($row['valid'] == 1) {
				return 1;
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	}

	function getUserID($token)
	{
		$this->db->select('userID');
		$query = $this->db->get_where('recovery_keys', ['token' => $token]);

		$uid = null;

		foreach ($query->result() as $row) {
			if ($row->valid = 1) {
				$uid = $row->userID;
			}
		}

		return $uid;
	}

	function getRID($token)
	{
		$this->db->select('rid');
		$query = $this->db->get_where('recovery_keys', ['token' => $token]);

		$rid = null;

		foreach ($query->result() as $row) {
			if ($row->valid = 1) {
				$rid = $row->rid;
			}
		}

		return $rid;
	}

	public function updatePassword($userID, $data)
	{
		$this->db->where('adminID', $userID);
		$this->db->update('admin', $data);

		return $this->db->affected_rows();
	}

	public function setTokenUsed($rid, $data)
	{
		$this->db->where('rid', $rid);
		$this->db->update('recovery_keys', $data);

		return $this->db->affected_rows();
	}

	public function insert($data)
	{
		$this->db->insert('admin', $data);
		return $this->db->affected_rows();
	}

	public function newAdmin($data)
	{
		$this->db->insert('newAdmin', $data);
		return $this->db->affected_rows();
	}

	public function findAdmin($adminUserName)
	{
		$this->db->select('adminID');
		$query = $this->db->get_where('admin', ['adminUserName' => $adminUserName]);
		$uid = null;
		foreach ($query->result() as $row) {
			$uid = $row->adminID;
		}

		return $uid;
	}

	public function sendMail($to, $userName)
	{
		$link = 'http://localhost/Play%20Ground/SendMailTest-1/forget.php?email=' . $to . '&userName=' . $userName;

		$body = "<b>Welcome To Edifices Admin Board</b><br><br>You'r request accept. Please Login using this UserName and Follow intrusions  <a href='$link' target='_blank'>Click here</a> to reset your password. If you are unable to click the link then copy the below link and paste in your browser to reset your password.<br><i>" . $link . "</i>";

		mail($to, "Edifices Admin panel: Authorisation: ", $body);

		return 'success';
	}

	public function checkAdmin($email, $password)
	{
		$query = $this->db->select('adminusername')->where(['adminPassword' => $password])->where(['adminEmail' => $email])->get('admin');
		if ($query->num_rows() == 1) {
			return true;
		} else {
			return false;
		}
	}

	public function read_user_information($email) {

		$query = $this->db->select('adminId')->where(['adminEmail' => $email])->get('admin');

		if ($query->num_rows() == 1) {
			return $query->result();
		} else {
			return false;
		}
	}

}

