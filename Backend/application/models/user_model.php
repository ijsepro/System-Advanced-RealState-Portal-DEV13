<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 4/7/2018
 * Time: 1:19 PM
 */

class User_model extends CI_Model
{

    function checkUser($email)
    {
        $this->db->select('uid');
        $query = $this->db->get_where('users', ['email' => $email]);

        if ($query->result_array() != null) {
            return 'true';
        } else {
            return 'false';
        }
    }

    function userID($email)
    {
        $this->db->select('uid');
        $query = $this->db->get_where('users', ['email' => $email]);

        $uid = null;

        foreach ($query->result() as $row)
        {
            $uid = $row->uid;
        }

        return $uid;
    }


    function generateRandomString($length = 20)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return md5($randomString);
    }


    function sendMail($to, $token)
    {

        $link = 'http://localhost/Play%20Ground/SendMailTest-1/forget.php?email=' . $to . '&token=' . $token;

        $body = "<b>Hello</b><br><br>You have requested for your password recovery. <a href='$link' target='_blank'>Click here</a> to reset your password. If you are unable to click the link then copy the below link and paste in your browser to reset your password.<br><i>" . $link . "</i>";

        mail($to, "Edifices Homes: Password Recovery Instruction", $body);

        return 'success';

    }

    function verifytoken($userID, $token)
    {
        $this->db->select('valid');
        $query = $this->db->get_where('recovery_keys', ['userID' => $userID] && ['token' => $token]);
//        $query = mysqli_query($db, "SELECT valid FROM recovery_keys WHERE userID = $userID AND token = '$token'");
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
