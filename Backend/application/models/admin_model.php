<?php
/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/6/2018
 * Time: 11:26 AM
 */
class Admin_model extends CI_Model{

//    public function __construct()
//    {
//        parent::__construct();
//        $this->db
//    }

    public function insert($data){
        $this->db->insert('admin',$data);
        return $this->db->affected_rows();
    }
}