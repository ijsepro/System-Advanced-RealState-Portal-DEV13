<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/29/2018
 * Time: 11:28 AM
 */
class Architecture_model extends CI_Model
{
	public function getAll()
	{
		$query = $this->db->get('architecture');
		return json_encode($query->result());
	}
}
