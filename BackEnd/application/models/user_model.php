<?php
/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 5/13/2018
 * Time: 8:37 PM
 */

class User_model extends CI_Model
{
	public function newUser($data)
	{
		$this->db->insert('newUser', $data);
		return $this->db->affected_rows();
	}

	public function checkUser($email, $password)
	{
		$query = $this->db->select('newUserName')->where(['newUserPassword' => $password])->where(['newUserEmail' => $email])->get('newUser');
		if ($query->num_rows() == 1) {
			return true;
		} else {
			return false;
		}
	}
}
