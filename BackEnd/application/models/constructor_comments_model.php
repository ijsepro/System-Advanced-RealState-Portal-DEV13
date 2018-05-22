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

	public function getConstructorJoinComments($conid = '')
	{
		$this->db->select('Commment,ClientName,WorkName,WorkPicture');
		$this->db->from('constructorcomments,constructorclients,constructorwork');
		$this->db->where('constructorcomments.ClientID = constructorclients.ClientID');
		$this->db->where('constructorcomments.WorkID = constructorwork.WorkID');
		$this->db->where(['constructorcomments.ConstructorID' => $conid]);

		$query = $this->db->get();

		return json_encode($query->result());
	}

	public function getConstructorProfileComments($conid = '')
	{
		$this->db->select('ClientName,ClientProfilePicture,Commment');
		$this->db->from('ConstructorClients,ConstructorComments');
		$this->db->where(['ConstructorComments.WorkID' => NULL]);
		$this->db->where('constructorcomments.ClientID = constructorclients.ClientID');
		$this->db->where(['ConstructorComments.ConstructorID' => $conid]);

		$query = $this->db->get();

		return json_encode($query->result());
	}
}
