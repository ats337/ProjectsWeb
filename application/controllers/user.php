<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class User extends CI_Controller {

    /**
     * ユーザ一覧を取得する
     */
    public function selectList() {
        mb_language("uni");
        mb_internal_encoding("UTF-8");
        mb_http_input("auto");
        mb_http_output("UTF-8");
        $this->load->database();
        $query = $this->db->get("user_info");

        $res = array();
        foreach ($query->result() as $row) {
            $user = array(
                'user' => array(
                    'id' => $row->user_id,
                    'name' => $row->user_name,
                    'password' => $row->password,
                    'mailAddress' => $row->mail_address
                )
            );
            array_push($res, $user);
        }

        header("Content-Type: application/json; charset=UTF-8");
        echo json_encode($res);
    }

    /**
     * ユーザを追加する
     * @return type
     */
    public function add() {
        // 入力チェック
        $this->load->library('form_validation');

        $this->form_validation->set_rules('userId', 'ユーザID', 'required');

        if ($this->form_validation->run() == FALSE) {
            $this->output->set_status_header(400, 'Bad Request');
            return;
        }

        $respBody = array(
            'user_id' => $this->input->post('userId'),
            'user_name' => $this->input->post('userName'),
            'password' => $this->input->post('password'),
            'mail_address' => $this->input->post('mailAddress')
        );
        echo json_encode($respBody);

        $this->load->database();
        $this->db->insert('user_info', $respBody);
    }
    
    /**
     * ユーザを削除する
     */
    public function delete() {
        $userId = $this->input->post('userId');
        // TODO 入力チェック
        
        
        $this->load->database();
        $this->db->where('user_id', $userId);
        $this->db->delete('user_info');
    }

}
