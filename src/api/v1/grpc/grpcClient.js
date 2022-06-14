// const path = require('path');

// const __dirname = path.resolve();
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = __dirname + '/user.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
	keepCase: true,
	longs: String,
	enums: String,
	defaults: true,
	oneofs: true,
});

const userProto = grpc.loadPackageDefinition(packageDefinition).user;
const client = new userProto.User('localhost:50051', grpc.credentials.createInsecure());

class ClientGrpc {
	updateAccount = (userId, isActive) => {
		console.log(userId, isActive);
		client.updateAccount({ userId, isActive }, (err, res) => {
			if (err) {
				return 'Failure';
			}
			return 'success';
		});
	};
}

export const clientGrpc = new ClientGrpc();
