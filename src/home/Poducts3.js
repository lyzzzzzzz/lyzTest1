import React,{Component} from 'react';
import {
	View,
	Text,
	Image,
	FlatList,
	StyleSheet,
	Dimensions,
	SectionList,
	TouchableOpacity,
	ActivityIndicator,
	TouchableNativeFeedback
} from 'react-native';
 
const URL_LEFT = "http://test.hubangyoushang.com/mobile/index.php?act=goods_class&op=index";
 
const {width} = Dimensions.get('window');
const leftWidth = 80;
const rightWidth = width-80;
 
export default class Poducts3 extends Component{
 
	constructor(props){
		super(props)
		this.state={
			leftShopTypeData:[],
			rightShopInfoData:[],
			isLoading:true,
			netError:false,
		}
	}
 
	componentDidMount(){
		this.getData();
	}
 
	getData(){
		fetch(URL_LEFT)
		 .then((response)=>response.json())
		 .then((responseData)=>{
		 	let data = responseData.data.class_list;
		 	let dataTemp = [];
 
		 	data.map(function(item,i){
		 		dataTemp.push({
		 			key:i,
		 			value:item
		 		})
		 	})
 
		 	this.setState({
				leftShopTypeData:this.state.leftShopTypeData.concat(dataTemp),
		 	})
		 	this.getDataShopInfo(dataTemp[0].value.gc_id);
 
		 })
		 .catch((error)=>{
		 	this.setState({
		 		isLoading:false,
				netError:true,
		 	})
		 })
		 .done();
	}
 
	renderShopType(){
		return(
			<FlatList 
				data={this.state.leftShopTypeData}
				renderItem={this.renderShopTypeItem.bind(this)}
				ItemSeparatorComponent={this.itemSeparatorComponent}
				style={styles.style_flatlist}
			/>
		);
	}
 
	renderShopTypeItem({item}){
		return(
			<TouchableOpacity onPress={()=>{
				this.getDataShopInfo(item.value.gc_id);
			}}>
				<View style={{width:leftWidth,alignItems:'center',marginTop:8,marginBottom:8}}>
					<Image source={{uri:item.value.image_inactive===''?'img_default':item.value.image_inactive}} style={{width:40,height:40}}/>
					<Text style={{fontSize:15,color:'gray',marginTop:5}}>{item.value.gc_name}</Text>
				</View>
			</TouchableOpacity>
		);
	}
 
	render(){
			return(
				<View>
					<View style={{width:width,height:50,alignItems:'center',justifyContent:'center',backgroundColor:'white'}}>
						<Text style={{fontSize:18,color:'black'}}>
							商品分类
						</Text>
					</View>
					<View style={{flexDirection:'row'}}>
						{this.renderShopType()}
						<View style={{backgroundColor:'gray',width:1}}/>
						
						{this.state.isLoading?this.renderLoadingView():this.renderShopTypeInfo()}
					</View>
				</View>
			);
	}
 
	renderShopTypeInfo(){
		return(
			<SectionList
				renderItem={this.renderShopTypeInfoItem}
				renderSectionHeader={this.renderShopTypeInfoHeaderItem}
				sections={this.state.rightShopInfoData}
				keyExtractor={this.keyExtractor}
				style={{paddingBottom:20}}
			/>
		);
	}
	
	renderShopTypeInfoItem = ({section,index}) => (
        <View  style={styles.list}>
            {section.data.map((item, i) => this.renderExpenseItem(item, i,index))}
        </View>
    );
 
    renderExpenseItem(item, i,index) {
		if(index != 0){
			return;
		}
        return(
	        <TouchableOpacity key={i} underlayColor="transparent">
	            <View style={styles.row}>
	                <Text>{item.gc_name}</Text>
	            </View>
	        </TouchableOpacity>
        );
    }
 
	renderShopTypeInfoHeaderItem({section}){
		var txt = section.key;
		return(
			<View style={styles.style_section_head_item}>
				<Text>{txt}</Text>
				<Image style={{width:9,height:9}} source={{uri:'img_goods_detail_allow_right'}} />
			</View>
		);
	}
 
	getDataShopInfo(gc_id){
		this.setState({
					isLoading:true,
		});
		fetch('http://test.hubangyoushang.com/mobile/index.php?act=goods_class&op=index&gc_id='+gc_id)
		 .then((response)=>response.json())
		 .then((responseData)=>{
		 	let data = responseData.data.class_list;
		 	let dataTemp = [];
			
			for(var i=0;i<data.length;i++){
				let mData = data[i];
				dataTemp.push({
					key:mData.gc_name,
					data:mData.next_class_list
				});
			}
		 	this.setState({
				rightShopInfoData:dataTemp,
				isLoading:false,
		 	})
 
		 })
		 .catch((error)=>{
 
		 })
		 .done();
	}
 
	keyExtractor(item,index){
		return "index"+index;
	}
 
	itemSeparatorComponent(){
		return(
			<View style={{width:leftWidth,height:1,backgroundColor:'gray'}}/>
		);
	}
 
	// 加载等待页
	renderLoadingView(){
		return(
			<View style={styles.style_default_container}>
				<ActivityIndicator 
					animating={true}
					color='red'
					size='large'
					style={{width:rightWidth}}
				/>
			</View>
		)
	}
 
}
 
const styles = StyleSheet.create({
	style_flatlist:{
		borderTopWidth:1,
		borderTopColor:'gray',
		borderBottomWidth:1,
		borderBottomColor:'gray',
		backgroundColor:'white',
		marginBottom:10,
		width:leftWidth
	},
	style_section_head_item:{
		width:rightWidth,
		height:40,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		borderBottomWidth:1,
		borderBottomColor:'gray',
		paddingLeft:10,
		paddingRight:10,
	},
    list: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        flexWrap:'wrap',
        width:rightWidth,
		paddingRight:10,
    },
    row: {
        height:30,
        paddingLeft:6,
        paddingRight:6,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderRightWidth:1,
        borderRightColor:'gray',
        borderBottomWidth:1,
		borderBottomColor:'gray',
    },
    style_default_container:{
	  	flexDirection:'row',
	  	justifyContent:'center',
	  	alignItems:'center',
	  	backgroundColor:'#F5FCFF',
	  	width:rightWidth
	 },
});

