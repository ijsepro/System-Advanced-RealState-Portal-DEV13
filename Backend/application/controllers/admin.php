<?php

/**
 * Created by IntelliJ IDEA.
 * User: DinukaX4
 * Date: 4/6/2018
 * Time: 11:25 AM
 */
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Admin extends CI_Controller
{

    public function __construct()
    {
        parent::__construct();
        $this->load->model('admin_model');

    }

    public function insert()
    {
//        echo $_POST['name'];
        $target_dir = "C:\wamp64\www\BackEnd\AREP\Uploads/";
//        $url = $_SERVER['REQUEST_URI'];
//        $parts = explode('/', $url);
//        $dir = "http://" . $_SERVER['SERVER_NAME'];

//        for ($i = 0; $i < count($parts) - 1; $i++) {
//            $dir = $parts[$i] . "/";
//
//        }
        $target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
        $uploadOK = 1;
//        $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

        //        $check=getimagesize($_FILES["selectFile"]["tmp_name"]);
        if (file_exists($target_file)) {
            echo "Sorry,File already exits";
            $uploadOK = 0;
        }
        if ($uploadOK == 0) {
            echo "Sorry";
        } else {
            if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
//                echo $target_file;
//                $json = json_decode($this->input->raw_input_stream);
        $result = $this->admin_model->insert([
            'adminUsername' => $_POST['adminName'],
            'adminemail' => $_POST['adminEmail'],
            'adminpassword' => $_POST['adminPassword'],
            'adminprofilepicture' => $target_file,
        ]);
        echo $result;
            } else {
                echo "Sorry,Try Again";
            }
        }

        /** @var TYPE_NAME Admin Data */
//        $json = json_decode($this->input->raw_input_stream);
//        $result = $this->admin_model->insert([
//            'adminUsername' => $json[0],
//            'adminemail' => $json[1],
//            'adminpassword' => $json[2],
//            'adminprofilepicture' => $target_file,
//        ]);
//        echo $result;

//
    }

    public function uploadImage()
    {
        $target_dir = "C:\wamp64\www\BackEnd\AREP\Uploads/";
//        $url = $_SERVER['REQUEST_URI'];
//        $parts = explode('/', $url);
//        $dir = "http://" . $_SERVER['SERVER_NAME'];

//        for ($i = 0; $i < count($parts) - 1; $i++) {
//            $dir = $parts[$i] . "/";
//
//        }
        $target_file = $target_dir . basename($_FILES["selectFile"]["name"]);
        $uploadOK = 1;
//        $imageFileType = pathinfo($target_file, PATHINFO_EXTENSION);

        //        $check=getimagesize($_FILES["selectFile"]["tmp_name"]);
        if (file_exists($target_file)) {
            echo "Sorry,File already exits";
            $uploadOK = 0;
        }
        if ($uploadOK == 0) {
            echo "Sorry";
        } else {
            if (move_uploaded_file($_FILES['selectFile']["tmp_name"], $target_file)) {
                echo $target_file;
            } else {
                echo "Sorry,Try Again";
            }
        }
    }
}