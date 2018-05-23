<?php
/**
 * Created by IntelliJ IDEA.
 * User: DK
 * Date: 5/17/2018
 * Time: 3:40 PM
 */

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods:GET,POST');
header('Access-Control-Allow-Headers, Content-Type');

class Constructor_comments extends CI_Controller
{

	public function __construct()
	{
		parent::__construct();
		$this->load->model('constructor_comments_model');
	}

	public function getConstructorComments($conid = '')
	{
		$comments = $this->constructor_comments_model->getConstructorComments($conid);
		echo $comments;
	}

	public function getConstructorJoinComments($conid = '')
	{
		$comments = $this->constructor_comments_model->getConstructorJoinComments($conid);
		echo $comments;
	}

	public function getConstructorProfileComments($conid = '')
	{
		$comments = $this->constructor_comments_model->getConstructorProfileComments($conid);
		echo $comments;
	}
}
