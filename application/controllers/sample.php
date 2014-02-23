<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Sample extends CI_Controller {
    public function index() {
        mb_language("uni");
        mb_internal_encoding("UTF-8");
        mb_http_input("auto");
        mb_http_output("UTF-8");
        $user[] = array(
            "userId"=> "u0001",
            "userName"=> "ユーザ名",
            "password"=> "password"
        );
        
        header("Content-Type: application/json; charset=UTF-8");
        echo json_encode($user);
    }
}