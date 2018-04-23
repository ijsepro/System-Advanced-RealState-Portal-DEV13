<?php

$_POST=json_decode(file_get_contents('php://input'),true);


class User extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
    }


    public function check()
    {
        //$json = json_encode($this->user_model->get($email[0],$email[1]));
        //echo $json;

    }

    public function insert()
    {

    }

    public function update()
    {

    }

    public function delete()
    {

    }

}