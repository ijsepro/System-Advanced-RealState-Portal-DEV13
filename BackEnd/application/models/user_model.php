<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 4/7/2018
 * Time: 1:19 PM
 */

class User_model extends CI_Model
{

	function checkUser($email)
	{
		$this->db->select('uid');
		$query = $this->db->get_where('users', ['email' => $email]);

		if ($query->result_array() != null) {
			return 'true';
		} else {
			return 'false';
		}
	}

	function userID($email)
	{
		$this->db->select('uid');
		$query = $this->db->get_where('users', ['email' => $email]);

		$uid = null;

		foreach ($query->result() as $row) {
			$uid = $row->uid;
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


	function sendMail($to, $token)
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
//        $query = mysqli_query($db, "SELECT valid FROM recovery_keys WHERE userID = $userID AND token = '$token'");
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
		$this->db->where('uid', $userID);
		$this->db->update('users', $data);

		return $this->db->affected_rows();
	}

	public function setTokenUsed($rid, $data)
	{
		$this->db->where('rid', $rid);
		$this->db->update('recovery_keys', $data);

		return $this->db->affected_rows();
	}
}
