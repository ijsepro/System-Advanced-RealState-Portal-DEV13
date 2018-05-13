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
}
