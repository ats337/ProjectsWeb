<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class User extends CI_Controller {
    public function selectList() {        
        $this->load->database();
        $query = $this->db->get("user_info");
        
        foreach ($query->result() as $row) {
            echo $row->user_id;
            echo $row->password;            
        }
    }
    
    public function add() {
        $reqData = json_decode(file_get_contents('php://input'), TRUE);
        $respBody = array(
            'user_id' => $reqData['userId'],
            'user_name' => $reqData['userName'],
            'password' => $reqData['password']
        );
        echo json_encode($respBody);
        
        $this->load->database();
        $this->db->insert('user_info', $respBody);
    }
}
