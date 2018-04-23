<?php

class User_model extends CI_Model{

    public function get($email=null){
        if($email===null){
            $query=$this->db->get('user');
        }else{
            $query=$this->db->get_where('user',['email'=>$email]);
        }

        return $query->result_array();
    }

    public function insert(){

    }

    public function update(){

    }

    public function delete(){

    }

}