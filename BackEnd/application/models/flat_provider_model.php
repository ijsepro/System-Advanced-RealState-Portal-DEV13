<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/26/2018
 * Time: 5:24 PM
 */

class Flat_Provider_model extends CI_Model
{
	public function getAll()
	{
		$query = $this->db->get('FlatProviders');
		return json_encode($query->result());
	}

	public function getFlatProvider($fName='')
	{
		$this->db->select('*');
		$query = $this->db->get_where('FlatProviders', ['FlatProviderName' => $fName]);

		return json_encode($query->result());
	}

}
