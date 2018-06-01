<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/26/2018
 * Time: 7:24 PM
 */

class Banker_model extends CI_Model
{
	public function getAll()
	{
		$query = $this->db->get('Bankers');
		return json_encode($query->result());
	}

	public function getBanker($bName='')
	{
		$this->db->select('*');
		$query = $this->db->get_where('Bankers', ['BankerName' => $bName]);

		return json_encode($query->result());
	}

}
