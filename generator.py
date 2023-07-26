import json 

if __name__ == "__main__":
        data = json.load(open("Contents.json", 'r'))
        output = {
                "name"            : "Coding Hub"  ,
                "short_name"      : "Coding Hub"  ,
                "start_url"       : "./index.html",
                "display"         : "fullscreen"  ,
                "theme_color"     : "#22979b"     ,
                "background_color": "#000000"     ,
        }
        
        images = []
        
        for image in data['images']:
                item = {}
                item["src"]   = f"./app_icons/{ image['filename'] }"
                item["sizes"] = image["size"]
                item["type"]  = "image/png"
                images.append(item)
                
        output['icons'] = images
        json.dump(output, open("manifest.json", 'w'), indent=4)