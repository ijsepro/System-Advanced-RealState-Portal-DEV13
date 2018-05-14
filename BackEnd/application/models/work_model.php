<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/3/2018
 * Time: 11:50 AM
 */

class Work_model extends CI_Model
{
	public function getConstructorWorks($conid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('ConstructorWork', ['ConstructorID' => $conid]);

		return json_encode($query->result());
	}
	public function getArchitectureWorks($arcid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('architectureWork', ['architectureID' => $arcid]);

		return json_encode($query->result());
	}
}

