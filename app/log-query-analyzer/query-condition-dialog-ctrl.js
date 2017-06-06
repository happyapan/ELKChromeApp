'use strict';
angular.module('elkChromeApp.logQueryAnalyzerModule').controller('queryConditionDialogCtrl', ['$scope', '$q', 'constants', 'commonDialogProvider', 'data',
    function ($scope, $q, constants, commonDialogProvider, data) {
        $scope.onLoad = function () {
            $scope.queryText = data.queryText;
        };

        $scope.verify = function(){
            var parseErrorMsg = null;
            try{
                JSON.parse($scope.queryText)
            }
            catch(e){
                parseErrorMsg=e;
            }
            if(parseErrorMsg){
                commonDialogProvider.alert("Parse JSON error");
                return false;
            }
            return true;
        };

        /**
         *
         */
        $scope.confirm = function () {
            if($scope.verify()){
                $scope.result = $scope.queryText;
                $scope.dialogApi.close();
            }
        };

        /**
         *
         */
        $scope.cancel = function () {
            $scope.result = null;
            $scope.dialogApi.close();
        };

        $scope.onLoad();
    }]
);