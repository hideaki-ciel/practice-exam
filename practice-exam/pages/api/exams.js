import { Client } from 'pg'

export default async (req, res) => {
    const client = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'ciel1744',
        port: 5432
    })
    client.connect()

    //書いたSQLが実行される。下記の例は、問題セットを表示
    const { rows: results } = await client.query('select * from questions_set')
    //複数件の場合は、そのままresultsを設定。1件だと分かっている場合は[0]
    res.status(200).json(results)
}