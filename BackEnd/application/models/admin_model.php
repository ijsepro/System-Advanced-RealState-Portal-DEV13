<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/23/2018
 * Time: 9:53 PM
 */
class Admin_model extends CI_Model
{

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
}

