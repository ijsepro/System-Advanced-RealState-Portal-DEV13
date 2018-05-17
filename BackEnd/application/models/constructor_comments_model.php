<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/17/2018
 * Time: 3:45 PM
 */

class Constructor_comments_model extends CI_Model
{
	public function getConstructorComments($conid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('ConstructorComments', ['ConstructorID' => $conid]);

		return json_encode($query->result());
	}
}

