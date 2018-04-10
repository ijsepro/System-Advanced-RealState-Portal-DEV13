<?php
/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/6/2018
 * Time: 11:11 AM
 */
class Home extends CI_Controller{

    public function index(){
        echo "Home";
    }
    public function test(){

       $q = $this->db->get('admin');
        print_r($q->result());
    }
}