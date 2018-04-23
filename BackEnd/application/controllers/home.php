<?php
/**
 * Created by IntelliJ IDEA.
 * User: Thisaru Udam
 * Date: 4/3/2018
 * Time: 8:50 PM
 */

class Home extends CI_Controller
{

    public function index()
    {
        $query = $this->db->get('users');
        $json = json_encode($query->result());
        echo $json;
    }

    public function test()
    {
        echo "cdsdfg";
    }
}