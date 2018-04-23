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
}

