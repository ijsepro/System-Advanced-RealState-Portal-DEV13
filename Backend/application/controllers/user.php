<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 4/7/2018
 * Time: 1:20 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class User extends CI_Controller
{

    public function __construct()
    {
        parent:: __construct();
        $this->load->model('user_model');
    }

    function checkUser($email)
    {

        $data = $this->user_model->checkUser($email);
        print_r($data);

    }

    function userID($email = "kushan.applestore16@gmail.com")
    {

        $data = $this->user_model->userID($email);
        print_r($data);

    }


    function generateRandomString($length = 20)
    {
        $data = $this->user_model->generateRandomString($length = 20);
        print_r($data);
    }


    function sendMail($email = '')
    {
//        $email = "kushan.applestore16@gmail.com";

        $userID = null;
        $token = null;
        $status = null;

        if ($this->user_model->checkUser($email) == "true") {
            $userID = $this->user_model->userID($email);
            $token = $this->user_model->generateRandomString();

            $data = array(
                'userID' => $userID ,
                'token' => $token
            );
            $query = $this->db->insert('recovery_keys', $data);

            if ($query) {
                $send_mail = $this->user_model->sendMail($email, $token);


                if ($send_mail === 'success') {
                    $status = 'A mail with recovery instruction has sent to your email.';
                } else {
                    $status = 'There is something wrong.';
                }


            } else {
                $status = 'There is something wrong.';
            }

        } else {
            $status = "This email doesn't exist in our database.";
        }

        $json = json_encode($status);
        echo $json;

    }

    function verifytoken($userID, $token)
    {
        $this->db->select('valid');
        $query = $this->db->get_where('recovery_keys', ['userID' => $userID] && ['token' => $token]);

        $row = mysqli_fetch_assoc($query);

        if (mysqli_num_rows($query) > 0) {
            if ($row['valid'] == 1) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    }
}