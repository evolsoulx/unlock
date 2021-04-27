gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDClickTextObjects1= [];
gdjs.New_32sceneCode.GDClickTextObjects2= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isScrollingUp(runtimeScene);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ClickText"), gdjs.New_32sceneCode.GDClickTextObjects1);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDClickTextObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDClickTextObjects1[i].setString("test" + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDClickTextObjects1.length = 0;
gdjs.New_32sceneCode.GDClickTextObjects2.length = 0;

gdjs.New_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
