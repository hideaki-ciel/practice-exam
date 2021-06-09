import { Client } from 'pg'

const exec_query = (query_txt) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'ciel1744',
        port: 5432
    })
    client.connect()
    const { rows: results } = await client.query(query_txt)
    return res.status(200).json(results)
}

export default exec_query

// export default async (req, res) => {
//     const client = new Client({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'postgres',
//         password: 'ciel1744',
//         port: 5432
//     })
//     client.connect()

//     //書いたSQLが実行される。下記の例は、問題
//     const { rows: results } = await client.query('select questions.id, questions_set_id, question_txt from questions where questions_set_id = 1')
//     //複数件の場合は、そのままresultsを設定。1件だと分かっている場合は[0]
//     res.status(200).json(results)
    
// }