
let networkDrive = require("windows-network-drive");
const fs = require('fs-extra');
const path = require("path");
const util = require("util");
//const NETWORK_DRIVE_PATH = "//localhost/c$";
const NETWORK_DRIVE_PATH = "\\\\WINRK185302-ATG\\OCT2000";

//pushFileToDrive(NETWORK_DRIVE_PATH,"copy_file.txt");
var pushFileToDrive = function (drive_path,source_file, dest_file) {
Promise.resolve()

	/**
	 * Check if the drive is already mounted. Mount it if it is not.
	 */
	.then(() =>
	{
		console.log("Testing if '" + drive_path + "' is already mounted");
		return networkDrive.find(drive_path);
	})
	.then((driveLetters) =>
	{
		if (0 < driveLetters.length)
		{
			console.log("The drive is already mounted. Returning the first drive (" + driveLetters[0] + ") letter because they all point to the same place.");
			return driveLetters[0];
		}
		else
		{
			console.log("The path is not mounted. Mount the path");
			return networkDrive.mount(drive_path, 'J', undefined, undefined);
		}
	})

	/**
	 * Write the file to the network drive
	 */

	 .then((driveLetter) =>
	{
		//const pathToFile = path.join("./../../", "priceBook.zip")

		var destDrive = util.format('%s:\\', driveLetter);

		const pathToNewDestination = path.join(destDrive, "import", dest_file)
		console.log("Destination path: " + pathToNewDestination);
		try {
		fs.copyFileSync(source_file, pathToNewDestination)
		console.log("Successfully copied the file!!")
		} catch(err) {
		throw err
		}		
	})
	.catch((err) =>
	{
		console.error(err);
		return;
	});
}

module.exports = pushFileToDrive;




