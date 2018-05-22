<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/17/2018
 * Time: 11:50 AM
 */

class Constructor_clients_model extends CI_Model
{
	public function getConstructorClients($conid = '')
	{
		$this->db->select('*');
		$query = $this->db->get_where('ConstructorClients', ['ConstructorID' => $conid]);

		return json_encode($query->result());
	}
}
