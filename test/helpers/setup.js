import chai from 'chai'
import chaiDom from 'chai-dom'
import browserEnv from 'browser-env'
import chaiSinon from 'sinon-chai'

chai.use(chaiDom)
chai.use(chaiSinon)
browserEnv()
