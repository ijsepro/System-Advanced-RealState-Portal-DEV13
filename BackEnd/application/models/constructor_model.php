<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/1/2018
 * Time: 7:24 PM
 */

class Constructor_model extends CI_Model
{
	public function getAll()
	{
		$query = $this->db->get('constructor');
		return json_encode($query->result());
	}

	public function getConstructor($cName='')
	{
		$this->db->select('*');
		$query = $this->db->get_where('Constructor', ['ConstructorName' => $cName]);

		return json_encode($query->result());
	}

}
