const aws = require('aws-sdk')

const endpoint = new aws.Endpoint(process.env.ENDPOINT_S3)

const s3 = new aws.S3({
    endpoint,
    credentials: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.APP_KEY
    }
})

const uploadFile = async (path, buffer, mimetype) => {
    const arquivo = await s3.upload({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path,
        Body: buffer,
        ContentType: mimetype
    }).promise()

    return {
        url: arquivo.Location,
        path: arquivo.Key
    }
}

const listagemArquivos = async () => {
    const arquivos = await s3.listObjects({
        Bucket: process.env.BACKBLAZE_BUCKET
    }).promise()

    const files = arquivos.Contents.map((file) => {
        return {
            url: `https://${process.env.BACKBLAZE_BUCKET}.${process.env.ENDPOINT_S3}/${file.Key}`,
            path: file.Key
        }
    })

    return files
}

const excluirArquivo = async (path) => {
    await s3.deleteObject({
        Bucket: process.env.BACKBLAZE_BUCKET,
        Key: path
    }).promise()
}

module.exports = {
    uploadFile,
    listagemArquivos,
    excluirArquivo
}