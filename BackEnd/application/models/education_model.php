<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/15/2018
 * Time: 3:52 PM
 */

class Education_model extends CI_Model
{
	public function getConstructorEducation($conid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('ConstructorEducation', ['ConstructorID' => $conid]);

		return json_encode($query->result());
	}
}
