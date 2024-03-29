import React from 'react';
import { Link } from 'react-router-dom';
import * as format from '../../../apis/format';
import styles from './CustomerBoardList.module.css';

const CustomerBoardList = ({boardList}) => {
    return (
        <div className='container'>
            <h1 className='title'>문의 목록</h1>
            <Link to='/Customer/insert' className='btn'>글쓰기</Link>
            <table border={1} className={`${styles.table} ${styles.list}`}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>등록일자</th>
                    </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => (
                        <tr key={board.no}>
                            <td align='center'>{board.no}</td>
                            <td align='left'>
                                <Link to={`/boards/${board.no}`}>{board.title}</Link>
                            </td>
                            <td align='center'>{board.writer}</td>
                            <td align='center'>{ format.formatDate(board.regDate) }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default CustomerBoardList