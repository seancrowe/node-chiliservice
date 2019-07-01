const soap = require('soap');
const parser = require("fast-xml-parser");

class ChiliConnector{

    constructor(url)
    {
        this.url = url;
    }
   
    async GetSoapClientAsync()
    {
        let url = this.url;

        if (this.client == null)
        {
            let getClient = function()
            {
                return new Promise((resolve, reject) => {
                    soap.createClient(url, (error, client) => 
                    {
                        resolve(client);
                    })
                });
            }
            
            this.client = await getClient();
            
            // Log SOAP errors
            /*this.client.on('soapError', function(err, eid){
                console.log("REQUEST ERROR", err.body);
            });*/
            
        }

        return this.client;

    }

    async SoapCallAsync(functionName, args, returnXml = false)
    {
        let client = await this.GetSoapClientAsync();

        return new Promise((resolve, reject) => {

            if (client == null)
            {
                reject("Error! Client is 'null' which means WSDL not found");
            }

            if (typeof client[functionName] === "function") { 
                client[functionName](args, async (error, result) => 
                {
                    let data = result[functionName + "Result"];
                    
                    if (data != null)
                    {
                        if (returnXml == false)
                        {
                            
                            data = parser.parse(data, 
                            {
                                ignoreAttributes: false,
                                attributeNamePrefix : "",
                            });

                            resolve(data[Object.keys(data)[0]]);

                        }

                        resolve(data);
                    }
                    else
                    {
                        reject("Error! data was null - which means you have a SOAP error \n " + result.body);
                    }
                });
            }
            else
            {
                reject("Error! Function not defined");
            }
 
        });
    }

    /* Below this line is automaticall generate from a C# applicaton */
    async ResourceItemAddPreviewOverrideAsync(apiKey, resourceName, itemID, previewFileData, previewExtension, isPermanentPreview) {
        return await this.SoapCallAsync("ResourceItemAddPreviewOverride", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, previewFileData: previewFileData, previewExtension: previewExtension, isPermanentPreview: isPermanentPreview}, false);
    }
    
    
    async ResourceItemAddWithPreviewAsync(apiKey, resourceName, newName, folderPath, xml, fileData, previewFileData, previewExtension, isPermanentPreview) {
        return await this.SoapCallAsync("ResourceItemAddWithPreview", {apiKey: apiKey, resourceName: resourceName, newName: newName, folderPath: folderPath, xml: xml, fileData: fileData, previewFileData: previewFileData, previewExtension: previewExtension, isPermanentPreview: isPermanentPreview}, false);
    }
    
    
    async ResourceItemCopyAsync(apiKey, resourceName, itemID, newName, folderPath) {
        return await this.SoapCallAsync("ResourceItemCopy", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, newName: newName, folderPath: folderPath}, false);
    }
    
    
    async ResourceItemDeleteAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemDelete", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemGetByIdOrPathAsync(apiKey, resourceName, itemIdOrPath) {
        return await this.SoapCallAsync("ResourceItemGetByIdOrPath", {apiKey: apiKey, resourceName: resourceName, itemIdOrPath: itemIdOrPath}, false);
    }
    
    
    async ResourceItemGetByNameAsync(apiKey, resourceName, itemName) {
        return await this.SoapCallAsync("ResourceItemGetByName", {apiKey: apiKey, resourceName: resourceName, itemName: itemName}, false);
    }
    
    
    async ResourceItemGetByPathAsync(apiKey, resourceName, itemPath) {
        return await this.SoapCallAsync("ResourceItemGetByPath", {apiKey: apiKey, resourceName: resourceName, itemPath: itemPath}, false);
    }
    
    
    async ResourceItemGetCacheInfoAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemGetCacheInfo", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemGetCustomMetaDataAsync(apiKey, resourceName, id, setName) {
        return await this.SoapCallAsync("ResourceItemGetCustomMetaData", {apiKey: apiKey, resourceName: resourceName, id: id, setName: setName}, false);
    }
    
    
    async ResourceItemGetDefinitionXMLAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemGetDefinitionXML", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemGetHistoryAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemGetHistory", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemGetPrivateInfoAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemGetPrivateInfo", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemGetTransformedURLAsync(apiKey, resourceName, itemID, type, transformationID, pageNum) {
        return await this.SoapCallAsync("ResourceItemGetTransformedURL", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, type: type, transformationID: transformationID, pageNum: pageNum}, false);
    }
    
    
    async AdsGetFromURLAsync(apiKey, url) {
        return await this.SoapCallAsync("AdsGetFromURL", {apiKey: apiKey, url: url}, false);
    }
    
    
    async LanguagesGetListAsync(apiKey, includeSystemLanguages) {
        return await this.SoapCallAsync("LanguagesGetList", {apiKey: apiKey, includeSystemLanguages: includeSystemLanguages}, false);
    }
    
    
    async LockApiKeyAsync(apiKeyToLock) {
        return await this.SoapCallAsync("LockApiKey", {apiKeyToLock: apiKeyToLock}, false);
    }
    
    
    async MobileFeedGetDocumentListAsync(apiKey, feedID, deviceInfoXML) {
        return await this.SoapCallAsync("MobileFeedGetDocumentList", {apiKey: apiKey, feedID: feedID, deviceInfoXML: deviceInfoXML}, false);
    }
    
    
    async MobileFeedGetDocumentXMLAsync(apiKey, feedID, deviceInfoXML, documentID) {
        return await this.SoapCallAsync("MobileFeedGetDocumentXML", {apiKey: apiKey, feedID: feedID, deviceInfoXML: deviceInfoXML, documentID: documentID}, false);
    }
    
    
    async ODTGetStylesAsync(apiKey, fileData) {
        return await this.SoapCallAsync("ODTGetStyles", {apiKey: apiKey, fileData: fileData}, false);
    }
    
    
    async ODTGetTextFlowAsync(apiKey, fileData, stylesMapping) {
        return await this.SoapCallAsync("ODTGetTextFlow", {apiKey: apiKey, fileData: fileData, stylesMapping: stylesMapping}, false);
    }
    
    
    async ProfilingClearSnapshotAsync(apiKey) {
        return await this.SoapCallAsync("ProfilingClearSnapshot", {apiKey: apiKey}, false);
    }
    
    
    async ProfilingSaveSnapshotAsync(apiKey, fileName, clear) {
        return await this.SoapCallAsync("ProfilingSaveSnapshot", {apiKey: apiKey, fileName: fileName, clear: clear}, false);
    }
    
    
    async ResourceFolderAddAsync(apiKey, resourceName, newName, parentPath) {
        return await this.SoapCallAsync("ResourceFolderAdd", {apiKey: apiKey, resourceName: resourceName, newName: newName, parentPath: parentPath}, false);
    }
    
    
    async ResourceFolderCopyAsync(apiKey, resourceName, folderPath, newFolderPath, includeSubFolders) {
        return await this.SoapCallAsync("ResourceFolderCopy", {apiKey: apiKey, resourceName: resourceName, folderPath: folderPath, newFolderPath: newFolderPath, includeSubFolders: includeSubFolders}, false);
    }
    
    
    async ResourceFolderDeleteAsync(apiKey, resourceName, relativePath) {
        return await this.SoapCallAsync("ResourceFolderDelete", {apiKey: apiKey, resourceName: resourceName, relativePath: relativePath}, false);
    }
    
    
    async ResourceFolderMoveAsync(apiKey, resourceName, folderPath, newFolderPath) {
        return await this.SoapCallAsync("ResourceFolderMove", {apiKey: apiKey, resourceName: resourceName, folderPath: folderPath, newFolderPath: newFolderPath}, false);
    }
    
    
    async ResourceGetHistoryAsync(apiKey, resourceName) {
        return await this.SoapCallAsync("ResourceGetHistory", {apiKey: apiKey, resourceName: resourceName}, false);
    }
    
    
    async ResourceGetTreeAsync(apiKey, resourceName, parentFolder, includeSubDirectories, includeFiles) {
        return await this.SoapCallAsync("ResourceGetTree", {apiKey: apiKey, resourceName: resourceName, parentFolder: parentFolder, includeSubDirectories: includeSubDirectories, includeFiles: includeFiles}, false);
    }
    
    
    async ResourceGetTreeLevelAsync(apiKey, resourceName, parentFolder, numLevels) {
        return await this.SoapCallAsync("ResourceGetTreeLevel", {apiKey: apiKey, resourceName: resourceName, parentFolder: parentFolder, numLevels: numLevels}, false);
    }
    
    
    async ResourceItemAddAsync(apiKey, resourceName, newName, folderPath, xml, fileData) {
        return await this.SoapCallAsync("ResourceItemAdd", {apiKey: apiKey, resourceName: resourceName, newName: newName, folderPath: folderPath, xml: xml, fileData: fileData}, false);
    }
    
    
    async ResourceItemAddFromURLAsync(apiKey, resourceName, newName, folderPath, url, login, pw, reuseExisting, previewFileURL, previewExtension, isPermanentPreview) {
        return await this.SoapCallAsync("ResourceItemAddFromURL", {apiKey: apiKey, resourceName: resourceName, newName: newName, folderPath: folderPath, url: url, login: login, pw: pw, reuseExisting: reuseExisting, previewFileURL: previewFileURL, previewExtension: previewExtension, isPermanentPreview: isPermanentPreview}, false);
    }
    
    
    async ResourceItemAddFromURLWithModificationDateAsync(apiKey, resourceName, newName, folderPath, url, login, pw, reuseExisting, previewFileURL, previewExtension, isPermanentPreview, modificationDate) {
        return await this.SoapCallAsync("ResourceItemAddFromURLWithModificationDate", {apiKey: apiKey, resourceName: resourceName, newName: newName, folderPath: folderPath, url: url, login: login, pw: pw, reuseExisting: reuseExisting, previewFileURL: previewFileURL, previewExtension: previewExtension, isPermanentPreview: isPermanentPreview, modificationDate: modificationDate}, false);
    }
    
    
    async EnvironmentSaveSettingsAsync(apiKey, environmentName, xml) {
        return await this.SoapCallAsync("EnvironmentSaveSettings", {apiKey: apiKey, environmentName: environmentName, xml: xml}, false);
    }
    
    
    async FoldingSettingCreatePackageAsync(apiKey, foldingSettingId) {
        return await this.SoapCallAsync("FoldingSettingCreatePackage", {apiKey: apiKey, foldingSettingId: foldingSettingId}, false);
    }
    
    
    async FontGetIncludedGlyphsAsync(apiKey, fontID) {
        return await this.SoapCallAsync("FontGetIncludedGlyphs", {apiKey: apiKey, fontID: fontID}, false);
    }
    
    
    async GenerateApiKeyAsync(environmentNameOrURL, userName, password) {
        return await this.SoapCallAsync("GenerateApiKey", {environmentNameOrURL: environmentNameOrURL, userName: userName, password: password}, false);
    }
    
    
    async GenerateApiKeyWithSettingsAsync(environmentNameOrURL, userName, password, settingsXML) {
        return await this.SoapCallAsync("GenerateApiKeyWithSettings", {environmentNameOrURL: environmentNameOrURL, userName: userName, password: password, settingsXML: settingsXML}, false);
    }
    
    
    async GetServerDateAsync() {
        return await this.SoapCallAsync("GetServerDate", {}, false);
    }
    
    
    async GoogleCreateAuthorizationUrlAsync(apiKey, clientID, clientSecret) {
        return await this.SoapCallAsync("GoogleCreateAuthorizationUrl", {apiKey: apiKey, clientID: clientID, clientSecret: clientSecret}, false);
    }
    
    
    async HealthCheckExecuteAsync(apiKey, itemID) {
        return await this.SoapCallAsync("HealthCheckExecute", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async IconSetAddIconAsync(apiKey, itemID, iconName, pathOrData) {
        return await this.SoapCallAsync("IconSetAddIcon", {apiKey: apiKey, itemID: itemID, iconName: iconName, pathOrData: pathOrData}, false);
    }
    
    
    async IconSetDeleteIconAsync(apiKey, itemID, iconName) {
        return await this.SoapCallAsync("IconSetDeleteIcon", {apiKey: apiKey, itemID: itemID, iconName: iconName}, false);
    }
    
    
    async IconSetGetIconsAsync(apiKey, itemID, allIcons) {
        return await this.SoapCallAsync("IconSetGetIcons", {apiKey: apiKey, itemID: itemID, allIcons: allIcons}, false);
    }
    
    
    async InterfaceGetInitialSettingsAsync(apiKey, forEditor) {
        return await this.SoapCallAsync("InterfaceGetInitialSettings", {apiKey: apiKey, forEditor: forEditor}, false);
    }
    
    
    async LanguageGetCombinedStringsAsync(apiKey, languageID, overrideBasedOn) {
        return await this.SoapCallAsync("LanguageGetCombinedStrings", {apiKey: apiKey, languageID: languageID, overrideBasedOn: overrideBasedOn}, false);
    }
    
    
    async LanguageGetCsvURLAsync(apiKey, languageID) {
        return await this.SoapCallAsync("LanguageGetCsvURL", {apiKey: apiKey, languageID: languageID}, false);
    }
    
    
    async LanguageGetUnicodeTextURLAsync(apiKey, languageID) {
        return await this.SoapCallAsync("LanguageGetUnicodeTextURL", {apiKey: apiKey, languageID: languageID}, false);
    }
    
    
    async LanguageImportCsvAsync(apiKey, languageID, filePathOrData) {
        return await this.SoapCallAsync("LanguageImportCsv", {apiKey: apiKey, languageID: languageID, filePathOrData: filePathOrData}, false);
    }
    
    
    async LanguageImportUnicodeTextAsync(apiKey, languageID, filePathOrData) {
        return await this.SoapCallAsync("LanguageImportUnicodeText", {apiKey: apiKey, languageID: languageID, filePathOrData: filePathOrData}, false);
    }
    
    
    async LanguageSaveStringsAsync(apiKey, languageID, stringXML) {
        return await this.SoapCallAsync("LanguageSaveStrings", {apiKey: apiKey, languageID: languageID, stringXML: stringXML}, false);
    }
    
    
    async DocumentSetAssetDirectoriesAsync(apiKey, documentID, userAssetDirectory, userGroupAssetDirectory, documentAssetDirectory) {
        return await this.SoapCallAsync("DocumentSetAssetDirectories", {apiKey: apiKey, documentID: documentID, userAssetDirectory: userAssetDirectory, userGroupAssetDirectory: userGroupAssetDirectory, documentAssetDirectory: documentAssetDirectory}, false);
    }
    
    
    async DocumentSetConstraintsAsync(apiKey, documentID, constraintsID) {
        return await this.SoapCallAsync("DocumentSetConstraints", {apiKey: apiKey, documentID: documentID, constraintsID: constraintsID}, false);
    }
    
    
    async DocumentSetDataSourceAsync(apiKey, itemID, datasourceXML) {
        return await this.SoapCallAsync("DocumentSetDataSource", {apiKey: apiKey, itemID: itemID, datasourceXML: datasourceXML}, false);
    }
    
    
    async DocumentSetDocumentEventActionsAsync(apiKey, itemID, definitionXML, replaceExistingActions) {
        return await this.SoapCallAsync("DocumentSetDocumentEventActions", {apiKey: apiKey, itemID: itemID, definitionXML: definitionXML, replaceExistingActions: replaceExistingActions}, false);
    }
    
    
    async DocumentSetVariableDefinitionsAsync(apiKey, itemID, definitionXML, replaceExistingVariables) {
        return await this.SoapCallAsync("DocumentSetVariableDefinitions", {apiKey: apiKey, itemID: itemID, definitionXML: definitionXML, replaceExistingVariables: replaceExistingVariables}, false);
    }
    
    
    async DocumentSetVariableValuesAsync(apiKey, itemID, varXML) {
        return await this.SoapCallAsync("DocumentSetVariableValues", {apiKey: apiKey, itemID: itemID, varXML: varXML}, false);
    }
    
    
    async DownloadURLAsync(apiKey, url) {
        return await this.SoapCallAsync("DownloadURL", {apiKey: apiKey, url: url}, false);
    }
    
    
    async DynamicAssetProviderGetTempAssetAsync(apiKey, dynamicAssetProviderID, data) {
        return await this.SoapCallAsync("DynamicAssetProviderGetTempAsset", {apiKey: apiKey, dynamicAssetProviderID: dynamicAssetProviderID, data: data}, false);
    }
    
    
    async EditsGetFromURLAsync(apiKey, url) {
        return await this.SoapCallAsync("EditsGetFromURL", {apiKey: apiKey, url: url}, false);
    }
    
    
    async EnvironmentAddAsync(apiKey, newName) {
        return await this.SoapCallAsync("EnvironmentAdd", {apiKey: apiKey, newName: newName}, false);
    }
    
    
    async EnvironmentCopyAsync(apiKey, environmentName, newName) {
        return await this.SoapCallAsync("EnvironmentCopy", {apiKey: apiKey, environmentName: environmentName, newName: newName}, false);
    }
    
    
    async EnvironmentDeleteAsync(apiKey, environmentName) {
        return await this.SoapCallAsync("EnvironmentDelete", {apiKey: apiKey, environmentName: environmentName}, false);
    }
    
    
    async EnvironmentGetColorProfilesAsync(apiKey) {
        return await this.SoapCallAsync("EnvironmentGetColorProfiles", {apiKey: apiKey}, false);
    }
    
    
    async EnvironmentGetCurrentAsync(apiKey) {
        return await this.SoapCallAsync("EnvironmentGetCurrent", {apiKey: apiKey}, false);
    }
    
    
    async EnvironmentGetDiskUsageAsync(apiKey, requestedResourceXML) {
        return await this.SoapCallAsync("EnvironmentGetDiskUsage", {apiKey: apiKey, requestedResourceXML: requestedResourceXML}, false);
    }
    
    
    async EnvironmentGetLoginSettingsAsync(environmentNameOrURL) {
        return await this.SoapCallAsync("EnvironmentGetLoginSettings", {environmentNameOrURL: environmentNameOrURL}, false);
    }
    
    
    async EnvironmentGetReflectionMapsAsync(apiKey) {
        return await this.SoapCallAsync("EnvironmentGetReflectionMaps", {apiKey: apiKey}, false);
    }
    
    
    async EnvironmentGetSettingsAsync(apiKey, environmentName) {
        return await this.SoapCallAsync("EnvironmentGetSettings", {apiKey: apiKey, environmentName: environmentName}, false);
    }
    
    
    async EnvironmentListAsync(apiKey) {
        return await this.SoapCallAsync("EnvironmentList", {apiKey: apiKey}, false);
    }
    
    
    async DocumentGetDocumentEventActionsAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetDocumentEventActions", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetEditorURLAsync(apiKey, itemID, workSpaceID, viewPrefsID, constraintsID, viewerOnly, forAnonymousUser) {
        return await this.SoapCallAsync("DocumentGetEditorURL", {apiKey: apiKey, itemID: itemID, workSpaceID: workSpaceID, viewPrefsID: viewPrefsID, constraintsID: constraintsID, viewerOnly: viewerOnly, forAnonymousUser: forAnonymousUser}, false);
    }
    
    
    async DocumentGetFoldingViewerURLAsync(apiKey, itemID, foldingSettingsID, modXML) {
        return await this.SoapCallAsync("DocumentGetFoldingViewerURL", {apiKey: apiKey, itemID: itemID, foldingSettingsID: foldingSettingsID, modXML: modXML}, false);
    }
    
    
    async DocumentGetHTMLEditorURLAsync(apiKey, itemID, workSpaceID, viewPrefsID, constraintsID, viewerOnly, forAnonymousUser) {
        return await this.SoapCallAsync("DocumentGetHTMLEditorURL", {apiKey: apiKey, itemID: itemID, workSpaceID: workSpaceID, viewPrefsID: viewPrefsID, constraintsID: constraintsID, viewerOnly: viewerOnly, forAnonymousUser: forAnonymousUser}, false);
    }
    
    
    async DocumentGetHTMLFoldingViewerURLAsync(apiKey, itemID, foldingSettingsID, modXML) {
        return await this.SoapCallAsync("DocumentGetHTMLFoldingViewerURL", {apiKey: apiKey, itemID: itemID, foldingSettingsID: foldingSettingsID, modXML: modXML}, false);
    }
    
    
    async DocumentGetHTMLPreloadAsync(apiKey, itemID, workSpaceID, viewPrefsID, constraintsID) {
        return await this.SoapCallAsync("DocumentGetHTMLPreload", {apiKey: apiKey, itemID: itemID, workSpaceID: workSpaceID, viewPrefsID: viewPrefsID, constraintsID: constraintsID}, false);
    }
    
    
    async DocumentGetHTMLPreloadURLAsync(apiKey, itemID, workSpaceID, viewPrefsID, constraintsID) {
        return await this.SoapCallAsync("DocumentGetHTMLPreloadURL", {apiKey: apiKey, itemID: itemID, workSpaceID: workSpaceID, viewPrefsID: viewPrefsID, constraintsID: constraintsID}, false);
    }
    
    
    async DocumentGetHTMLThreeDModelViewerURLAsync(apiKey, itemID, threeDModelID, modXML) {
        return await this.SoapCallAsync("DocumentGetHTMLThreeDModelViewerURL", {apiKey: apiKey, itemID: itemID, threeDModelID: threeDModelID, modXML: modXML}, false);
    }
    
    
    async DocumentGetInfoAsync(apiKey, itemID, extended) {
        return await this.SoapCallAsync("DocumentGetInfo", {apiKey: apiKey, itemID: itemID, extended: extended}, false);
    }
    
    
    async DocumentGetIpadXMLAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetIpadXML", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetPlacedAdsAndEditAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetPlacedAdsAndEdit", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetPreflightResultsAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetPreflightResults", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetThreeDModelViewerURLAsync(apiKey, itemID, threeDModelID, modXML) {
        return await this.SoapCallAsync("DocumentGetThreeDModelViewerURL", {apiKey: apiKey, itemID: itemID, threeDModelID: threeDModelID, modXML: modXML}, false);
    }
    
    
    async DocumentGetUsedAssetsAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetUsedAssets", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetVariableDefinitionsAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetVariableDefinitions", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetVariableValuesAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetVariableValues", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentProcessServerSideAsync(apiKey, itemID, resourceXML) {
        return await this.SoapCallAsync("DocumentProcessServerSide", {apiKey: apiKey, itemID: itemID, resourceXML: resourceXML}, false);
    }
    
    
    async DocumentSetAnnotationsAsync(apiKey, itemID, annotationXML, replaceExistingAnnotations) {
        return await this.SoapCallAsync("DocumentSetAnnotations", {apiKey: apiKey, itemID: itemID, annotationXML: annotationXML, replaceExistingAnnotations: replaceExistingAnnotations}, false);
    }
    
    
    async DocumentCreateFromPDFAsync(apiKey, documentName, folderPath, pdfPathOrData, backgroundAssetLocation) {
        return await this.SoapCallAsync("DocumentCreateFromPDF", {apiKey: apiKey, documentName: documentName, folderPath: folderPath, pdfPathOrData: pdfPathOrData, backgroundAssetLocation: backgroundAssetLocation}, false);
    }
    
    
    async DocumentCreateHTMLAsync(apiKey, itemID, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateHTML", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateIDMLAsync(apiKey, itemID, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateIDML", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateImagesAsync(apiKey, itemID, settingsXML, imageConversionProfileID, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateImages", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, imageConversionProfileID: imageConversionProfileID, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateImagesAndPDFAsync(apiKey, itemID, settingsXML, imageConversionProfileID, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateImagesAndPDF", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, imageConversionProfileID: imageConversionProfileID, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateODFAsync(apiKey, itemID, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateODF", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreatePackageAsync(apiKey, itemID, taskPriority) {
        return await this.SoapCallAsync("DocumentCreatePackage", {apiKey: apiKey, itemID: itemID, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreatePDFAsync(apiKey, itemID, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreatePDF", {apiKey: apiKey, itemID: itemID, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempFoldingAsync(apiKey, itemID, docXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempFolding", {apiKey: apiKey, itemID: itemID, docXML: docXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempHTMLAsync(apiKey, itemID, docXML, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempHTML", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempIDMLAsync(apiKey, itemID, docXML, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempIDML", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempImagesAsync(apiKey, itemID, docXML, settingsXML, imageConversionProfileID, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempImages", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, imageConversionProfileID: imageConversionProfileID, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempImagesAndPDFAsync(apiKey, itemID, docXML, settingsXML, imageConversionProfileID, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempImagesAndPDF", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, imageConversionProfileID: imageConversionProfileID, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempODFAsync(apiKey, itemID, docXML, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempODF", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempPackageAsync(apiKey, itemID, docXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempPackage", {apiKey: apiKey, itemID: itemID, docXML: docXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentCreateTempPDFAsync(apiKey, itemID, docXML, settingsXML, taskPriority) {
        return await this.SoapCallAsync("DocumentCreateTempPDF", {apiKey: apiKey, itemID: itemID, docXML: docXML, settingsXML: settingsXML, taskPriority: taskPriority}, false);
    }
    
    
    async DocumentGetAnnotationsAsync(apiKey, itemID) {
        return await this.SoapCallAsync("DocumentGetAnnotations", {apiKey: apiKey, itemID: itemID}, false);
    }
    
    
    async DocumentGetDefaultSettingsAsync(apiKey, itemID, viewType, viewPrefsID, constraintID) {
        return await this.SoapCallAsync("DocumentGetDefaultSettings", {apiKey: apiKey, itemID: itemID, viewType: viewType, viewPrefsID: viewPrefsID, constraintID: constraintID}, false);
    }
    
    
    async AssetGetImageInfoAsync(apiKey, assetID) {
        return await this.SoapCallAsync("AssetGetImageInfo", {apiKey: apiKey, assetID: assetID}, false);
    }
    
    
    async BarcodeCreateAsync(apiKey, barcodeTypeID, barcodeText) {
        return await this.SoapCallAsync("BarcodeCreate", {apiKey: apiKey, barcodeTypeID: barcodeTypeID, barcodeText: barcodeText}, false);
    }
    
    
    async BarcodeCreateColoredAsync(apiKey, barcodeTypeID, barcodeText, backColor, barColor, textColor) {
        return await this.SoapCallAsync("BarcodeCreateColored", {apiKey: apiKey, barcodeTypeID: barcodeTypeID, barcodeText: barcodeText, backColor: backColor, barColor: barColor, textColor: textColor}, false);
    }
    
    
    async CsvFileCreateAsync(apiKey, xmlData, fileName) {
        return await this.SoapCallAsync("CsvFileCreate", {apiKey: apiKey, xmlData: xmlData, fileName: fileName}, false);
    }
    
    
    async DataSourceAddSampleFileAsync(apiKey, dataSourceID, fileName, fileOrData) {
        return await this.SoapCallAsync("DataSourceAddSampleFile", {apiKey: apiKey, dataSourceID: dataSourceID, fileName: fileName, fileOrData: fileOrData}, false);
    }
    
    
    async DataSourceDeleteSampleFileAsync(apiKey, dataSourceID, fileName) {
        return await this.SoapCallAsync("DataSourceDeleteSampleFile", {apiKey: apiKey, dataSourceID: dataSourceID, fileName: fileName}, false);
    }
    
    
    async DataSourceDownloadSpreadsheetsAsync(apiKey, dataSourceID) {
        return await this.SoapCallAsync("DataSourceDownloadSpreadsheets", {apiKey: apiKey, dataSourceID: dataSourceID}, false);
    }
    
    
    async DataSourceDownloadURLAsync(apiKey, dataSourceID, urlType, query, forDocumentID, editorQueryString) {
        return await this.SoapCallAsync("DataSourceDownloadURL", {apiKey: apiKey, dataSourceID: dataSourceID, urlType: urlType, query: query, forDocumentID: forDocumentID, editorQueryString: editorQueryString}, false);
    }
    
    
    async DataSourceFileGetXMLAsync(apiKey, dataSourceID, fileDataOrPath, fileExtension) {
        return await this.SoapCallAsync("DataSourceFileGetXML", {apiKey: apiKey, dataSourceID: dataSourceID, fileDataOrPath: fileDataOrPath, fileExtension: fileExtension}, false);
    }
    
    
    async DataSourceListSampleFilesAsync(apiKey, dataSourceID) {
        return await this.SoapCallAsync("DataSourceListSampleFiles", {apiKey: apiKey, dataSourceID: dataSourceID}, false);
    }
    
    
    async DataSourceSalesForceGetXMLAsync(apiKey, dataSourceID) {
        return await this.SoapCallAsync("DataSourceSalesForceGetXML", {apiKey: apiKey, dataSourceID: dataSourceID}, false);
    }
    
    
    async DataSourceSpreadsheetGetXMLAsync(apiKey, dataSourceID, spreadsheetID) {
        return await this.SoapCallAsync("DataSourceSpreadsheetGetXML", {apiKey: apiKey, dataSourceID: dataSourceID, spreadsheetID: spreadsheetID}, false);
    }
    
    
    async DocumentCopyAnnotationsAsync(apiKey, fromItemID, toItemID, replaceExistingAnnotations) {
        return await this.SoapCallAsync("DocumentCopyAnnotations", {apiKey: apiKey, fromItemID: fromItemID, toItemID: toItemID, replaceExistingAnnotations: replaceExistingAnnotations}, false);
    }
    
    
    async DocumentCopyDocumentEventActionsAsync(apiKey, fromItemID, toItemID, replaceExistingActions) {
        return await this.SoapCallAsync("DocumentCopyDocumentEventActions", {apiKey: apiKey, fromItemID: fromItemID, toItemID: toItemID, replaceExistingActions: replaceExistingActions}, false);
    }
    
    
    async DocumentCopyVariableDefinitionsAsync(apiKey, fromItemID, toItemID, replaceExistingVariables) {
        return await this.SoapCallAsync("DocumentCopyVariableDefinitions", {apiKey: apiKey, fromItemID: fromItemID, toItemID: toItemID, replaceExistingVariables: replaceExistingVariables}, false);
    }
    
    
    async DocumentCreateFromBlankDocTemplateAsync(apiKey, documentName, folderPath, blankDocTemplateID) {
        return await this.SoapCallAsync("DocumentCreateFromBlankDocTemplate", {apiKey: apiKey, documentName: documentName, folderPath: folderPath, blankDocTemplateID: blankDocTemplateID}, false);
    }
    
    
    async DocumentCreateFromChiliPackageAsync(apiKey, documentName, folderPath, packagePathOrData, newAssetLocation, newFontLocation) {
        return await this.SoapCallAsync("DocumentCreateFromChiliPackage", {apiKey: apiKey, documentName: documentName, folderPath: folderPath, packagePathOrData: packagePathOrData, newAssetLocation: newAssetLocation, newFontLocation: newFontLocation}, false);
    }
    
    
    async DocumentCreateFromODTAsync(apiKey, documentName, folderPath, odtPathOrData, settingsXML) {
        return await this.SoapCallAsync("DocumentCreateFromODT", {apiKey: apiKey, documentName: documentName, folderPath: folderPath, odtPathOrData: odtPathOrData, settingsXML: settingsXML}, false);
    }
    
    
    async SwitchServerTestConnectionAsync(apiKey, url, userName, userPW, oemKey) {
        return await this.SoapCallAsync("SwitchServerTestConnection", {apiKey: apiKey, url: url, userName: userName, userPW: userPW, oemKey: oemKey}, false);
    }
    
    
    async TaskGetEditorCliLogAsync(apiKey, taskID) {
        return await this.SoapCallAsync("TaskGetEditorCliLog", {apiKey: apiKey, taskID: taskID}, false);
    }
    
    
    async TaskGetStatusAsync(apiKey, taskID) {
        return await this.SoapCallAsync("TaskGetStatus", {apiKey: apiKey, taskID: taskID}, false);
    }
    
    
    async TaskGetStatusAndRemoveIfCompletedAsync(apiKey, taskID) {
        return await this.SoapCallAsync("TaskGetStatusAndRemoveIfCompleted", {apiKey: apiKey, taskID: taskID}, false);
    }
    
    
    async TaskRemoveFromLogAsync(apiKey, taskID) {
        return await this.SoapCallAsync("TaskRemoveFromLog", {apiKey: apiKey, taskID: taskID}, false);
    }
    
    
    async TasksGetListAsync(apiKey, includeRunningTasks, includeWaitingTasks, includeFinishedTasks) {
        return await this.SoapCallAsync("TasksGetList", {apiKey: apiKey, includeRunningTasks: includeRunningTasks, includeWaitingTasks: includeWaitingTasks, includeFinishedTasks: includeFinishedTasks}, false);
    }
    
    
    async TasksGetQueueOverviewAsync(apiKey) {
        return await this.SoapCallAsync("TasksGetQueueOverview", {apiKey: apiKey}, false);
    }
    
    
    async TasksGetStatussesAsync(apiKey, taskXML) {
        return await this.SoapCallAsync("TasksGetStatusses", {apiKey: apiKey, taskXML: taskXML}, false);
    }
    
    
    async ThreeDModelCreatePackageAsync(apiKey, threeDModelId) {
        return await this.SoapCallAsync("ThreeDModelCreatePackage", {apiKey: apiKey, threeDModelId: threeDModelId}, false);
    }
    
    
    async UploadExternalAssetAsync(apiKey, url, fileName, fileData) {
        return await this.SoapCallAsync("UploadExternalAsset", {apiKey: apiKey, url: url, fileName: fileName, fileData: fileData}, false);
    }
    
    
    async XinetExecutePortalDICallAsync(apiKey, xinetServerID, callID, _arguments) {
        return await this.SoapCallAsync("XinetExecutePortalDICall", {apiKey: apiKey, xinetServerID: xinetServerID, callID: callID, arguments: _arguments}, false);
    }
    
    
    async XinetSetCurrentCredentialsAsync(apiKey, userName, userPW) {
        return await this.SoapCallAsync("XinetSetCurrentCredentials", {apiKey: apiKey, userName: userName, userPW: userPW}, false);
    }
    
    
    async XinetTestConnectionAsync(apiKey, url, userName, userPW) {
        return await this.SoapCallAsync("XinetTestConnection", {apiKey: apiKey, url: url, userName: userName, userPW: userPW}, false);
    }
    
    
    async ApiKeyClearHeaderFieldsForServerDownloadsAsync(apiKey) {
        return await this.SoapCallAsync("ApiKeyClearHeaderFieldsForServerDownloads", {apiKey: apiKey}, false);
    }
    
    
    async ApiKeyGetCurrentSettingsAsync(apiKey) {
        return await this.SoapCallAsync("ApiKeyGetCurrentSettings", {apiKey: apiKey}, false);
    }
    
    
    async ApiKeyKeepAliveAsync(apiKey) {
        return await this.SoapCallAsync("ApiKeyKeepAlive", {apiKey: apiKey}, false);
    }
    
    
    async ApiKeySetHeaderFieldForServerDownloadsAsync(apiKey, headerFieldKey, headerFieldValue) {
        return await this.SoapCallAsync("ApiKeySetHeaderFieldForServerDownloads", {apiKey: apiKey, headerFieldKey: headerFieldKey, headerFieldValue: headerFieldValue}, false);
    }
    
    
    async ApiKeySetRequestHeaderForDomainAsync(apiKey, domain, headerFieldKey, headerFieldValue) {
        return await this.SoapCallAsync("ApiKeySetRequestHeaderForDomain", {apiKey: apiKey, domain: domain, headerFieldKey: headerFieldKey, headerFieldValue: headerFieldValue}, false);
    }
    
    
    async ApiKeySetRequestWithCredentialsForDomainAsync(apiKey, domain, requestWithCredentials) {
        return await this.SoapCallAsync("ApiKeySetRequestWithCredentialsForDomain", {apiKey: apiKey, domain: domain, requestWithCredentials: requestWithCredentials}, false);
    }
    
    
    async SetAutomaticPreviewGenerationAsync(apiKey, createPreviews) {
        return await this.SoapCallAsync("SetAutomaticPreviewGeneration", {apiKey: apiKey, createPreviews: createPreviews}, false);
    }
    
    
    async SetContentAdministrationAsync(apiKey, allowContentAdministration) {
        return await this.SoapCallAsync("SetContentAdministration", {apiKey: apiKey, allowContentAdministration: allowContentAdministration}, false);
    }
    
    
    async SetNextResourceItemIDAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("SetNextResourceItemID", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async SetUserLanguageAsync(apiKey, languageIdOrName, ignoreWorkSpaceLanguage) {
        return await this.SoapCallAsync("SetUserLanguage", {apiKey: apiKey, languageIdOrName: languageIdOrName, ignoreWorkSpaceLanguage: ignoreWorkSpaceLanguage}, false);
    }
    
    
    async SetWorkingEnvironmentAsync(apiKey, environmentName) {
        return await this.SoapCallAsync("SetWorkingEnvironment", {apiKey: apiKey, environmentName: environmentName}, false);
    }
    
    
    async SetWorkspaceAdministrationAsync(apiKey, allowWorkspaceAdministration) {
        return await this.SoapCallAsync("SetWorkspaceAdministration", {apiKey: apiKey, allowWorkspaceAdministration: allowWorkspaceAdministration}, false);
    }
    
    
    async SpellCheckDictionariesGetSystemListAsync(apiKey) {
        return await this.SoapCallAsync("SpellCheckDictionariesGetSystemList", {apiKey: apiKey}, false);
    }
    
    
    async SpellCheckDictionaryAddAsync(apiKey, name, dicFileOrData, affFileOrData) {
        return await this.SoapCallAsync("SpellCheckDictionaryAdd", {apiKey: apiKey, name: name, dicFileOrData: dicFileOrData, affFileOrData: affFileOrData}, false);
    }
    
    
    async SpellCheckDictionaryAddFromSystemAsync(apiKey, name, systemDictName) {
        return await this.SoapCallAsync("SpellCheckDictionaryAddFromSystem", {apiKey: apiKey, name: name, systemDictName: systemDictName}, false);
    }
    
    
    async SpellCheckDictionaryReplaceFileAsync(apiKey, itemID, fileType, fileOrData) {
        return await this.SoapCallAsync("SpellCheckDictionaryReplaceFile", {apiKey: apiKey, itemID: itemID, fileType: fileType, fileOrData: fileOrData}, false);
    }
    
    
    async SwitchServerFlowGetCheckPointsAsync(apiKey, switchServerID, flowID) {
        return await this.SoapCallAsync("SwitchServerFlowGetCheckPoints", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID}, false);
    }
    
    
    async SwitchServerFlowGetElementsJobCountAsync(apiKey, switchServerID, flowID) {
        return await this.SoapCallAsync("SwitchServerFlowGetElementsJobCount", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID}, false);
    }
    
    
    async SwitchServerFlowGetFullConfigAsync(apiKey, switchServerID, flowID) {
        return await this.SoapCallAsync("SwitchServerFlowGetFullConfig", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID}, false);
    }
    
    
    async SwitchServerFlowGetJobsAsync(apiKey, switchServerID, flowID) {
        return await this.SoapCallAsync("SwitchServerFlowGetJobs", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID}, false);
    }
    
    
    async SwitchServerFlowGetSubmitPointsAsync(apiKey, switchServerID, flowID) {
        return await this.SoapCallAsync("SwitchServerFlowGetSubmitPoints", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID}, false);
    }
    
    
    async SwitchServerFlowSubmitFileToFolderAsync(apiKey, switchServerID, flowID, elementID, filePathOrData, fileName) {
        return await this.SoapCallAsync("SwitchServerFlowSubmitFileToFolder", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID, elementID: elementID, filePathOrData: filePathOrData, fileName: fileName}, false);
    }
    
    
    async SwitchServerFlowSubmitFileToSubmitPointAsync(apiKey, switchServerID, flowID, elementID, filePathOrData, fileName, metaXML) {
        return await this.SoapCallAsync("SwitchServerFlowSubmitFileToSubmitPoint", {apiKey: apiKey, switchServerID: switchServerID, flowID: flowID, elementID: elementID, filePathOrData: filePathOrData, fileName: fileName, metaXML: metaXML}, false);
    }
    
    
    async SwitchServerGetFlowListAsync(apiKey, switchServerID) {
        return await this.SoapCallAsync("SwitchServerGetFlowList", {apiKey: apiKey, switchServerID: switchServerID}, false);
    }
    
    
    async ResourceSearchByIDsAsync(apiKey, resourceName, IDs) {
        return await this.SoapCallAsync("ResourceSearchByIDs", {apiKey: apiKey, resourceName: resourceName, IDs: IDs}, false);
    }
    
    
    async ResourceSearchInFolderAsync(apiKey, resourceName, parentFolderPath, includeSubDirectories, name) {
        return await this.SoapCallAsync("ResourceSearchInFolder", {apiKey: apiKey, resourceName: resourceName, parentFolderPath: parentFolderPath, includeSubDirectories: includeSubDirectories, name: name}, false);
    }
    
    
    async ResourceSearchPagedAsync(apiKey, resourceName, name, pageSize, pageNum) {
        return await this.SoapCallAsync("ResourceSearchPaged", {apiKey: apiKey, resourceName: resourceName, name: name, pageSize: pageSize, pageNum: pageNum}, false);
    }
    
    
    async ResourceSearchPagedWithSortingAsync(apiKey, resourceName, parentFolderPath, includeSubDirectories, name, pageSize, pageNum, sortOn, sortOrder, itemID) {
        return await this.SoapCallAsync("ResourceSearchPagedWithSorting", {apiKey: apiKey, resourceName: resourceName, parentFolderPath: parentFolderPath, includeSubDirectories: includeSubDirectories, name: name, pageSize: pageSize, pageNum: pageNum, sortOn: sortOn, sortOrder: sortOrder, itemID: itemID}, false);
    }
    
    
    async ServerDeleteAllSaveSystemFileInfosAsync(apiKey) {
        return await this.SoapCallAsync("ServerDeleteAllSaveSystemFileInfos", {apiKey: apiKey}, false);
    }
    
    
    async ServerDeleteSavedSystemInfoXMLAsync(apiKey, name) {
        return await this.SoapCallAsync("ServerDeleteSavedSystemInfoXML", {apiKey: apiKey, name: name}, false);
    }
    
    
    async ServerGetLicenseInfoAsync(apiKey) {
        return await this.SoapCallAsync("ServerGetLicenseInfo", {apiKey: apiKey}, false);
    }
    
    
    async ServerGetLoggingSettingsAsync(apiKey) {
        return await this.SoapCallAsync("ServerGetLoggingSettings", {apiKey: apiKey}, false);
    }
    
    
    async ServerGetSavedSystemInfoListAsync(apiKey) {
        return await this.SoapCallAsync("ServerGetSavedSystemInfoList", {apiKey: apiKey}, false);
    }
    
    
    async ServerGetSavedSystemInfoXMLAsync(apiKey, name) {
        return await this.SoapCallAsync("ServerGetSavedSystemInfoXML", {apiKey: apiKey, name: name}, false);
    }
    
    
    async ServerGetSettingsAsync(apiKey) {
        return await this.SoapCallAsync("ServerGetSettings", {apiKey: apiKey}, false);
    }
    
    
    async ServerGetSystemInfoAsync(apiKey, data, extended) {
        return await this.SoapCallAsync("ServerGetSystemInfo", {apiKey: apiKey, data: data, extended: extended}, false);
    }
    
    
    async ServerLicenseRequestAsync(apiKey, remoteFunction, argumentsXML) {
        return await this.SoapCallAsync("ServerLicenseRequest", {apiKey: apiKey, remoteFunction: remoteFunction, argumentsXML: argumentsXML}, false);
    }
    
    
    async ServerLogClearAsync(apiKey) {
        return await this.SoapCallAsync("ServerLogClear", {apiKey: apiKey}, false);
    }
    
    
    async ServerSaveLoggingSettingsAsync(apiKey, xml) {
        return await this.SoapCallAsync("ServerSaveLoggingSettings", {apiKey: apiKey, xml: xml}, false);
    }
    
    
    async ServerSaveSettingsAsync(apiKey, xml) {
        return await this.SoapCallAsync("ServerSaveSettings", {apiKey: apiKey, xml: xml}, false);
    }
    
    
    async ServerSaveSystemInfoXMLAsync(apiKey, name, xml) {
        return await this.SoapCallAsync("ServerSaveSystemInfoXML", {apiKey: apiKey, name: name, xml: xml}, false);
    }
    
    
    async SetAssetDirectoriesAsync(apiKey, userAssetDirectory, userGroupAssetDirectory, documentAssetDirectory) {
        return await this.SoapCallAsync("SetAssetDirectories", {apiKey: apiKey, userAssetDirectory: userAssetDirectory, userGroupAssetDirectory: userGroupAssetDirectory, documentAssetDirectory: documentAssetDirectory}, false);
    }
    
    
    async ResourceItemGetTransformedURLWithDebugInfoAsync(apiKey, resourceName, itemID, type, transformationID, pageNum) {
        return await this.SoapCallAsync("ResourceItemGetTransformedURLWithDebugInfo", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, type: type, transformationID: transformationID, pageNum: pageNum}, false);
    }
    
    
    async ResourceItemGetURLAsync(apiKey, resourceName, itemID, type, pageNum) {
        return await this.SoapCallAsync("ResourceItemGetURL", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, type: type, pageNum: pageNum}, false);
    }
    
    
    async ResourceItemGetURLForAnonymousUserAsync(apiKey, resourceName, itemID, type, pageNum) {
        return await this.SoapCallAsync("ResourceItemGetURLForAnonymousUser", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, type: type, pageNum: pageNum}, false);
    }
    
    
    async ResourceItemGetURLWithDebugInfoAsync(apiKey, resourceName, itemID, type, pageNum) {
        return await this.SoapCallAsync("ResourceItemGetURLWithDebugInfo", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, type: type, pageNum: pageNum}, false);
    }
    
    
    async ResourceItemGetXMLAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemGetXML", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, true);
    }
    
    
    async ResourceItemMoveAsync(apiKey, resourceName, itemID, newName, newFolderPath) {
        return await this.SoapCallAsync("ResourceItemMove", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, newName: newName, newFolderPath: newFolderPath}, false);
    }
    
    
    async ResourceItemRemovePreviewOverrideAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemRemovePreviewOverride", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemReplaceFileAsync(apiKey, resourceName, itemID, fileData) {
        return await this.SoapCallAsync("ResourceItemReplaceFile", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, fileData: fileData}, false);
    }
    
    
    async ResourceItemReplaceFileWithPreviewOverrideAsync(apiKey, resourceName, itemID, fileData, previewFileData, previewExtension, isPermanentPreview) {
        return await this.SoapCallAsync("ResourceItemReplaceFileWithPreviewOverride", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, fileData: fileData, previewFileData: previewFileData, previewExtension: previewExtension, isPermanentPreview: isPermanentPreview}, false);
    }
    
    
    async ResourceItemResetPreviewsAsync(apiKey, resourceName, itemID) {
        return await this.SoapCallAsync("ResourceItemResetPreviews", {apiKey: apiKey, resourceName: resourceName, itemID: itemID}, false);
    }
    
    
    async ResourceItemsAddFromZipAsync(apiKey, resourceName, folderPath, fileData) {
        return await this.SoapCallAsync("ResourceItemsAddFromZip", {apiKey: apiKey, resourceName: resourceName, folderPath: folderPath, fileData: fileData}, false);
    }
    
    
    async ResourceItemSaveAsync(apiKey, resourceName, itemID, xml) {
        return await this.SoapCallAsync("ResourceItemSave", {apiKey: apiKey, resourceName: resourceName, itemID: itemID, xml: xml}, false);
    }
    
    
    async ResourceItemSaveCustomMetaDataAsync(apiKey, resourceName, id, setName, xml) {
        return await this.SoapCallAsync("ResourceItemSaveCustomMetaData", {apiKey: apiKey, resourceName: resourceName, id: id, setName: setName, xml: xml}, false);
    }
    
    
    async ResourceLibraryGetSettingsAsync(apiKey, resourceName, libraryName) {
        return await this.SoapCallAsync("ResourceLibraryGetSettings", {apiKey: apiKey, resourceName: resourceName, libraryName: libraryName}, false);
    }
    
    
    async ResourceLibrarySaveSettingsAsync(apiKey, resourceName, libraryName, xml) {
        return await this.SoapCallAsync("ResourceLibrarySaveSettings", {apiKey: apiKey, resourceName: resourceName, libraryName: libraryName, xml: xml}, false);
    }
    
    
    async ResourceListAsync(apiKey) {
        return await this.SoapCallAsync("ResourceList", {apiKey: apiKey}, false);
    }
    
    
    async ResourceSearchAsync(apiKey, resourceName, name) {
        return await this.SoapCallAsync("ResourceSearch", {apiKey: apiKey, resourceName: resourceName, name: name}, false);
    }
        
}

module.exports = ChiliConnector;