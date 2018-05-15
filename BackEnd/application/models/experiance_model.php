<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/15/2018
 * Time: 3:52 PM
 */

class Experiance_model extends CI_Model
{
	public function getConstructorExperiance($conid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('ConstructorExperiance', ['ConstructorID' => $conid]);

		return json_encode($query->result());
	}
}
